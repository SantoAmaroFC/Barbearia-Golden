import knex, { Client, Knex } from "knex";
import "dotenv/config"


export const db = knex({
    client: 'pg',
    connection: {},
    debug: true
}
)