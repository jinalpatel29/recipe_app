export class Recipe{
    constructor(
        public title: string='',
        public chef: string='',
        public rating: number = 0,
        public ingredients: string[] = [],
        public createdAt: string ='',
        public updatedAt: string = ''
    ){}
}

