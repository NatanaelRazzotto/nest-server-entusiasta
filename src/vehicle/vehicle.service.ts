import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';


@Injectable()
export class VehicleService {

    constructor(private prisma: PrismaService) {}

    async findAll() {
      return this.prisma.vehicle.findMany();
    }

    async findById(id: string) {
        return this.prisma.vehicle.findUnique({
          where: { id },
        });
      }

    async findByNumber(numberSearch : string){
      return this.prisma.vehicle.findMany({
        where: {
          serialNumber: {
            contains: numberSearch,
            mode: 'insensitive', // Torna a comparação indiferente a maiúsculas/minúsculas
          }
        },
        take: 5, // Limita o número de resultados
        include: {
          // images: {
          //   include: {
          //     vehicle: true,
          //   },
          // },
        },
      });
    }
}
