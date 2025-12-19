# Bot BCIE - Azure Functions Bot

Este repositorio contiene un bot conversacional implementado con Microsoft Bot Framework y desplegado en Azure Functions.

## Estructura del Proyecto

- **bot.js**: Implementación principal del bot usando `ActivityHandler` y `DialogSet`
- **package.json**: Dependencias del proyecto (botbuilder, botbuilder-dialogs, etc.)
- **host.json**: Configuración de Azure Functions

## Tecnologías Utilizadas

- **Microsoft Bot Framework**: Framework para construir bots conversacionales
- **Azure Functions**: Plataforma serverless para ejecutar el bot
- **Node.js**: Runtime de JavaScript para el backend

## Documentación Adicional

### Conceptos de Operaciones y Programación

Para aprender sobre conceptos importantes en el desarrollo y operaciones modernas, consulta:

📚 **[CONCEPTOS_OPS_Y_POO.md](./CONCEPTOS_OPS_Y_POO.md)** - Documentación completa sobre:
- **MLOps** (Machine Learning Operations)
- **DataOps** (Data Operations)
- **SecOps** (Security Operations)
- **FinOps** (Financial Operations / Cloud Financial Management)
- **Programación Orientada a Objetos en Python**

Este documento proporciona explicaciones detalladas, ejemplos de código y mejores prácticas para cada uno de estos conceptos fundamentales.

## Instalación

```bash
npm install
```

## Ejecución Local

```bash
npm start
```

## Dependencias Principales

- `botbuilder`: ^4.20.0
- `botbuilder-dialogs`: ^4.23.3
- `botframework-connector`: ^4.20.0
- `@azure/storage-blob`: ^12.29.1
- `axios`: ^1.13.2
- `dotenv`: ^16.3.1

## Características del Bot

- Manejo de mensajes usando `DialogSet`
- Gestión de estado de conversación y usuario
- Saludo automático a nuevos miembros
- Integración con Azure Functions para despliegue serverless

## Contribuciones

Este bot está diseñado para ser extensible. Puedes agregar nuevos diálogos y funcionalidades siguiendo el patrón establecido en `bot.js`.
