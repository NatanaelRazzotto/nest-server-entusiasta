import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { VehicleSchedule } from '../interfaces/vehicle-schedule';

@Injectable()
export class UrbsVehicleScheduleService {
    constructor(private httpService: HttpService) {}

    async findLoadVehicle(vehicle: string, a: string): Promise<VehicleSchedule[]> {
        const url = `https://transporteservico.urbs.curitiba.pr.gov.br/getTabelaVeiculo.php?carro=${vehicle}&c=${a}`;

        try {
            // Realiza a requisição para a URL
            const response = await lastValueFrom(this.httpService.get(url));
            const data = response.data;

            // Mapear os dados para garantir que sigam o formato da interface
            const result: VehicleSchedule[] = data.map((item: any) => ({
                codLinha: item.COD_LINHA,
                nomeLinha: item.NOME_LINHA,
                veiculo: item.VEICULO,
                horario: item.HORARIO,
                tabela: item.TABELA,
                codPonto: item.COD_PONTO,
            }));

            return result;
        } catch (error) {
            console.error('Erro ao carregar os dados:', error);
            throw new Error('Erro ao carregar os dados do veículo.');
        }
    }
}
