export const DB = 'blog';
export const PASSWORD = 'S7505606262s';
export const USER="root";
export const HOST = 'localhost';
export const dialect = 'mysql'; // or your preferred database dialect
export const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
};
