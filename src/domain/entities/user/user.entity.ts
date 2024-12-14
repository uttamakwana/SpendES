import { MIN_PIN_LENGTH } from './user.constraint.js';

type TPreferences = {
 reminder?: Date;
};

export type TUserEntity = {
 name: string;
 email: string;
 contact: number;
 password?: string;
 pin: number;
 avatar?: string;
 refreshToken?: string;
 isActive?: boolean;
 preferences?: TPreferences;
 createdAt?: Date;
 updatedAt?: Date;
};

export class UserEntity {
 public name: TUserEntity["name"];
 public email: TUserEntity["email"];
 public contact: TUserEntity["contact"];
 private password: TUserEntity["password"];
 private pin: TUserEntity["pin"];
 public avatar: TUserEntity["avatar"];
 private refreshToken: TUserEntity["refreshToken"];
 public isActive: TUserEntity["isActive"];
 public preferences: TUserEntity["preferences"];
 public createdAt: TUserEntity["createdAt"];
 public updatedAt: TUserEntity["updatedAt"];

 constructor(
  { name, email, contact, password, pin, avatar, refreshToken, isActive, preferences, createdAt, updatedAt }: TUserEntity
 ) {

  if (String(pin).length > MIN_PIN_LENGTH) {
   throw new Error("PIN must be of 4 digit!");
  }

  this.name = name;
  this.email = email;
  this.contact = contact;
  this.password = password;
  this.pin = pin;
  this.avatar = avatar;
  this.refreshToken = refreshToken;
  this.avatar = avatar;
  this.isActive = isActive;
  this.preferences = preferences;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
 }
}
