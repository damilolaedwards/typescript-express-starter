interface mailProps {
  name: string
  link?: string
}

export class Mail {
  static async resetPassword(
    email: string,
    subject: string,
    props: mailProps,
    template: string,
  ) {}

  static async passwordChanged( email: string,
    subject: string,
    props: mailProps,
    template: string,){

  }
  static async deactivateAccount(){
    
  }
}
