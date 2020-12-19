import {IProps} from "./types";

interface IName {
  firstName: string
  lastName: string
}

interface IUserProps extends IProps {
  picture: string
  age: number
  name: IName
  gender: string
  company: string
  email: string
  phone: string
  address: string
  createdAt: string
  tags: string[]
}

export class User implements IUserProps {
  private readonly _id: string
  private readonly _index: number
  private readonly _isActive: boolean
  private readonly _picture: string
  private readonly _age: number
  private readonly _name: IName
  private readonly _gender: string
  private readonly _company: string
  private readonly _email: string
  private readonly _phone: string
  private readonly _address: string
  private readonly _createdAt: string
  private readonly _tags: string[]

  private constructor(props: IUserProps) {
    this._id = props.id
    this._index = props.index
    this._isActive = props.isActive
    this._picture = props.picture
    this._age = props.age
    this._name = props.name
    this._gender = props.gender
    this._company = props.company
    this._email = props.email
    this._phone = props.phone
    this._address = props.address
    this._createdAt = props.createdAt
    this._tags = props.tags
  }


  get id(): string {
    return this._id
  }

  get index(): number {
    return this._index
  }

  get isActive(): boolean {
    return this._isActive
  }

  get picture(): string {
    return this._picture
  }

  get age(): number {
    return this._age
  }

  get name(): IName {
    return this._name
  }

  get gender(): string {
    return this._gender
  }

  get company(): string {
    return this._company
  }

  get email(): string {
    return this._email
  }

  get phone(): string {
    return this._phone
  }

  get address(): string {
    return this._address
  }

  get createdAt(): string {
    return this._createdAt
  }

  get tags(): string[] {
    return this._tags
  }

  static create(props: IUserProps): User {
    return new User(props)
  }

}
