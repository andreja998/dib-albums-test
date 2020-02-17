class BasePhoto {
  constructor(public id: number, public url: string, public title: string) {}
}

export class Album extends BasePhoto {
  constructor(id: number, url: string, title: string, public creator: User) {
    super(id, url, title);
  }
}

export class Photo extends BasePhoto {
  constructor(id: number, url: string, title: string) {
    super(id, url, title);
  }
}

export class User {
  constructor(public id: number, public name: string) {}
}

export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {}
}
