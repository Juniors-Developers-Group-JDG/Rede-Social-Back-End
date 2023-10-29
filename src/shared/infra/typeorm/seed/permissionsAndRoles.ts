import { createConnection } from "typeorm";
import { Permission } from "@modules/accounts/infra/typeorm/entities/Permission";
import { Role } from "@modules/accounts/infra/typeorm/entities/Role";

console.log("Conectando ao banco de dados...");

const seedDatabase = async () => {
  try {
    const connection = await createConnection();
    console.log("Conexão bem-sucedida!");

    await connection.transaction(async transactionalEntityManager => {
  
      const permission = new Permission();
      permission.name = "Permissão 1";
      permission.description = "Descrição da permissão 1";
      await transactionalEntityManager.save(permission);

      const role = new Role();
      role.name = "Role 1";
      role.description = "Descrição da role 1";
      role.permission = [permission];
      await transactionalEntityManager.save(role);
    });

    console.log("Permissão, Role e vinculação criadas com sucesso!");

    await connection.close();
    console.log("Conexão fechada.");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
};

seedDatabase();
