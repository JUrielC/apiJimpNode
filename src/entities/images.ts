import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from 'typeorm'
import { User } from './users';  

@Entity('images')
export class Image extends  BaseEntity{
    @PrimaryGeneratedColumn({ name: 'id_image' }) 
    id: number;

    @Column({ name: 'nombre_image', type: 'varchar', length: 30 })
    nombreImage: string;

    @Column({ name: 'url_image', type: 'varchar', length: 260 })
    urlImage: string;

   
    @ManyToOne(() => User, user => user.images)
    @JoinColumn({ name: 'users_id_user' })
    user: User; 
}