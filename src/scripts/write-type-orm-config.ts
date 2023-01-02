import { typeOrmConfigService } from '../@core/config/type-orm-config.service';
import * as fs from 'fs';

fs.writeFileSync('ormconfig.json', JSON.stringify(typeOrmConfigService.getConfig(), null, 2));
