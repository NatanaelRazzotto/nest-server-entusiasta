import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

export interface LineSchedule {
    HORA: string;
    PONTO: string;
    DIA: string;
    NUM: string;
    TABELA: string;
    ADAPT: string;
    COD: string;
  }

@Injectable()
export class UrbsLineOperationService {

    private baseUrl = 'https://transporteservico.urbs.curitiba.pr.gov.br/getTabelaLinha.php';

    constructor(private httpService: HttpService) {}
    
    async getLineSchedule(linha: string): Promise<LineSchedule[]> {
        try {
          const response = await axios.get<LineSchedule[]>(`${this.baseUrl}?linha=${linha}&c=`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao buscar horários para a linha ${linha}:`, error);
          throw new Error('Não foi possível obter os dados de horário da linha.');
        }
      }
}
