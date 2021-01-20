import { CTaskTab } from './js/src/components/task/CTaskTab.js';
//import {СTaskTab} from './js/src/components/task/TaskTab.js'
Taskt =new CTaskTab()
webix.ui({
    rows: [
      { view: 'toolbar',
        padding:3,
        elements: [
            { view: "icon", icon: "mdi mdi-menu", click: function(){
               $$("$sidebar1").toggle();
             }
            },
            { view: "label", label: "Task manager"},
            {},
            {
                view: 'label',
                id: 'userInfoLabel',
                label: 'загрузка...',
                width: 200,
            },
            {
                view: 'button',
                id: 'logoutBtn',
                css: 'webix_secondary',
                label: 'Выход',
                width: 150,
            },
          ],
      },
      { cols:[
        {
          view: "sidebar",
          data: menu_data,
          on:{
            onAfterSelect: function(id){
              webix.message("Selected: "+this.getItem(id).value)
              $$("form1").showBatch(id);
            }
          }
        },
        {id:"form1",visibleBatch:"projects", rows:[
        ProjectsTabView,
        //TaskTabView,
        Taskt.config(),
        EmployeeTabView,
        ]
    },
      ]}
    ]
  });

