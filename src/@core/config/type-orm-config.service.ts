import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import 'dotenv/config';

class TypeOrmConfigService {
    constructor(private env: { [k: string]: string | undefined }) {}

    private getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing database configuration on .env`);
        }
        return value;
    }

    public ensureValues(keys: string[]): this {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }

    public getPort(): string {
        return this.getValue('APP_PORT', true);
    }

    public isProduction(): boolean {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }

    public getConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USER'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),
            entities: [join(__dirname, './common/**', '*.entity.{ts,js}'), join(__dirname, '../../components/**', '*.entity.{ts,js}'), join(__dirname, '../../components/**/**', '*.entity.{ts,js}')],
            migrationsTableName: 'migration',
            migrations: [join(__dirname, '../../migration', '*.{ts,js}')],
            cli: {
                migrationsDir: 'src/migration'
            },
            ssl: this.isProduction()
        };
    }
}

const typeOrmConfigService = new TypeOrmConfigService(process.env).ensureValues(['POSTGRES_HOST', 'POSTGRES_PORT', 'POSTGRES_USER', 'POSTGRES_PASSWORD', 'POSTGRES_DATABASE']);

export { typeOrmConfigService };
