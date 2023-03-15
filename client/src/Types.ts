//create type for menu items
type MenuItem = {
    id : number;
    name: string;
    link: string;
}

//create type for menu items
type Menu = {
    menuItems: MenuItem[];
}

export type { MenuItem };
export type { Menu };

