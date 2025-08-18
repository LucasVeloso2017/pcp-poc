import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  if (!apiKey || !apiUrl) {
    return new NextResponse('Chave de API ou URL não configurada no servidor', { status: 500 });
  }
  
  try {
    const apiResponse = await fetch(`${apiUrl}/api/v1/Fornecedor/fornecedores`, {
      headers: {
        'x-api-key': apiKey, 
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 } 
    });

    if (!apiResponse.ok) {
      return new NextResponse(apiResponse.statusText, { status: apiResponse.status });
    }

    const data = await apiResponse.json();
    
    return NextResponse.json(data);

  } catch (error) {
    console.error('[API_COMPRAS_ERROR]', error);
    return new NextResponse('Erro ao se comunicar com a API externa', { status: 500 });
  }
}