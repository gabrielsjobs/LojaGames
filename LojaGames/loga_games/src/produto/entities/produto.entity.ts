import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_produtos"})
    export class Produto{

        @PrimaryGeneratedColumn()
        id: number

        @IsNotEmpty()
        @Column({length: 100, nullable: false})
        nome: string

        @Column()
        data: Date

        @Column("decimal", { precision: 10, scale: 2})
        preco: number

        @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
            onDelete: "CASCADE"
        })
        categoria: Categoria
    }
