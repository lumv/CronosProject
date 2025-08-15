/**Acá se configuran las conecciones del modelo */
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true, //crea tablas automáticamente desde los modelos
    entities: [User],
});
