import { ClientController } from '@app/client/handlers/client.controller'
import { Test } from '@nestjs/testing';

describe('ClientController', () => {
    let clientController: ClientController;

beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        imports: [], // Add
        controllers: [], // Add
        providers: [],   // Add
    }).compile();

    clientController = moduleRef.get<ClientController>(ClientController);
    });

it('should be defined', () => {
    expect(clientController).toBeDefined();
    });
});
