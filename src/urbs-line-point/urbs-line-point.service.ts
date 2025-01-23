import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

export interface LinePoint {   
    NOME: string;
    NUM: string;
    LAT: string;
    LON: string;
    SEQ: string;
    GRUPO: string;
    TIPO: string;
    SENTIDO: string;
    ITINERARY_ID: string;
  }

@Injectable()
export class UrbsLinePointService {

    private baseUrl = 'https://transporteservico.urbs.curitiba.pr.gov.br/getPontosLinha.php';

    constructor(private httpService: HttpService) {}
    
    async getLinePoint(linha: string): Promise<LinePoint[]> {
        try {
          const response = await axios.get<LinePoint[]>(`${this.baseUrl}?linha=${linha}&c=${process.env.CWBTU_TOKEN}`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao buscar horários para a linha ${linha}:`, error);
          throw new Error('Não foi possível obter os dados de horário da linha.');
        }
      }
}
