// возвращает webix конфигурацию рабочего пространства приложения
export default function WorkedPlaceView(taskTab, employeeTab, progectTab) {
    return {
        id: 'workedPlace',
        rows: [
            // header
            {
                id: 'main',
                cols: [
                    {
                        view: 'tabbar',
                        id: 'main-tabbar',
                        value: 'listView',
                        width: 600,
                        multiview: true,
                        options: [
                            { id: 'bookTab', value: 'Книги' },
                            { id: 'employeeTab', value: 'Сотрудники' },
                            { id: 'progectTab', value: 'Проекты' },
                        ]

                    },
                    {},
                    {
                        id: 'tab-controlls',
                        rows: [
                            taskTab.configTabControlls(),
                            employeeTab.configTabControlls(),
                            progectTab.configTabControlls(),
                        ]
                    }, // элементы управления табов
                ],
            },
            // содержимое табов
            {
                view: 'multiview',
                id: 'main-views',
                cells: [
                    taskTab.config(),
                    employeeTab.config(),
                    progectTab.config(),
                ]
            },
        ],
    }
}