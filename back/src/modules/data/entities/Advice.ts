import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Objects } from './Object';

@Entity('advice')
class Advice {
  @PrimaryColumn()
  id?: string;

  @ManyToOne(() => Objects, object => object.advices)
  @JoinColumn({ name: 'id_object' })
  object: Objects;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Advice };