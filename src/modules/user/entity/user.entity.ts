import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
} from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column(
    { 
      type: 'varchar',
      length: 105,
      unique: true,
      nullable: false
    }
  )
  email: string;

  @Column(
    { 
      type: 'varchar',
      length: 255,
      nullable: false,
      select: false, // no mostrar contraseña por defecto
    }
  )
  password: string;

  @Column(
    { 
      type: 'datetime',
      default: () => 'CURRENT_TIMESTAMP' 
    }
  )
  createdAt: Date;

  @Column(
    { 
      type: 'datetime',
      default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' 
    }
  )
  updatedAt: Date;
}
