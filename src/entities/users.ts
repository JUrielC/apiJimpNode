import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm'
import { Image } from './images'; 
@Entity('users')
export class User extends  BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id_user' }) 
    id: number;

    @Column({ name: 'user_name', type: 'varchar', length: 20 })
    userName: string;

    @Column({ name: 'password', type: 'varchar', length: 60 })
    password: string;


    @OneToMany(() => Image, image => image.user)
    images: Image[];
}