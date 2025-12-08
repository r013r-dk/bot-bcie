// Importar ActivityHandler desde el paquete principal
const { ActivityHandler } = require('botbuilder');
// Importar DialogSet desde el paquete de diálogos
const { DialogSet } = require('botbuilder-dialogs');

class DialogBot extends ActivityHandler {
  constructor(conversationState, userState, dialog) {
    super();
    if (!conversationState || !userState || !dialog) throw new Error('DialogBot: faltan argumentos');

    this.conversationState = conversationState;
    this.userState = userState;
    this.dialog = dialog;
    this.dialogState = this.conversationState.createProperty('DialogState');

    this.onMessage(async (context, next) => {
      console.log('Running dialog with Message Activity.');

      // Ejecutar el diálogo principal
      const dialogs = new DialogSet(this.dialogState);
      dialogs.add(this.dialog);

      const dc = await dialogs.createContext(context);
      const result = await dc.continueDialog();
      if (result.status === 'empty') {
        await dc.beginDialog(this.dialog.id);
      }

      // Guardar cambios de estado
      await this.conversationState.saveChanges(context, false);
      await this.userState.saveChanges(context, false);
      await next();
    });

    this.onMembersAdded(async (context, next) => {
      const members = context.activity.membersAdded || [];
      for (const mem of members) {
        if (mem.id !== context.activity.recipient.id) {
          await context.sendActivity('¡Hola! Empecemos.');
          // Opcional: Ejecutar el diálogo inmediatamente al unirse
          /*
          const dialogs = new DialogSet(this.dialogState);
          dialogs.add(this.dialog);
          const dc = await dialogs.createContext(context);
          await dc.beginDialog(this.dialog.id);
          */
        }
      }
      await next();
    });
  }

  async run(context) {
    await super.run(context);
  }
}

module.exports.DialogBot = DialogBot;