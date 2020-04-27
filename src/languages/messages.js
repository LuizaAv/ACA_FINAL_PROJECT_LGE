const messages = {
  EN: {
    expense: 'Expense',
    income: 'Income',
    summary: 'Summary',
    history: 'History',
    categories: 'Categories',
    category: 'Category',
    charts: 'Charts',
    chartsHeader: 'Total Expense and Income',
    chartType: 'Chart Type',
    addIncome: 'Add Income',
    addExpense: 'Add Expense',
    sortByAmount: 'Sort By Amount',
    ascendingOrder: 'Ascending Order',
    descendingOrder: 'Descending Order',
    type: 'Type',
    all: 'All',
    amount: 'Amount',
    period: 'Period',
    wholePeriod: 'Whole Period',
    daily: 'Daily',
    monthly: 'Monthly',
    yearly: 'Yearly',
    search: 'Search',
    searchPlaceholder: 'Search in history',
    view: 'View',
    currentState: 'Current State',
    upcomingState: 'Upcoming State',
    upcoming: 'Upcoming',
    addCategory: 'Add Category',
    selectColor: 'Select Color',
    categoryType: 'Category Type',
    categoryName: 'Category Name',
    cancel: 'Cancel',
    done: 'Done',
    name: 'Name',
    total: 'Total',
    balance: 'Balance',
    ok: 'Ok',
    deleteWarning: 'Are you sure you want to delete this item?',
    editItem: 'Edit Item',
    action: 'Action',
    editCategory: 'Edit Category',
    date: 'Date',
    snackbarAdd: 'Added succesfully',
    snackbarEdit: 'Edited successfully',
    snackbarDelet: 'Deleted successfully',
    snackbarCancel: 'The action is canceled',
    snackbarError: 'Error: Server is not responding',
    byDate: 'By Date',
    byAmount: 'By Amount',
    help: 'Help',
    learn: 'Learn How to Use The Program',
    aboutUs: 'About Us',
    aboutHelp: 'Financial Management Application is an opportunity to manage your funds more effectively. You can import the total information about your daily income and costs, and application will help you to receive compact reports about your daily, monthly, yearly costs and income. It also gives you an opportunity to see all your costs and income on graphs, which help you to collect comprehensive information about all cost and income ingredients in total result.',
    summaryHelp: 'In this page you can add the costs and income by clicking on the appropriate buttons. It is necessary to choose category from our list, add cost/income name and its amount. After adding it will be reflected on our summery table, which include cost or income ingredient’s category, type and its amount. Here you have opportunity to filter all costs and income by its amount with ascending or descending order, filter all costs and income category’ types, and also separate current and future costs and income.',
    historyHelp: 'In this page are introduced all costs and income that added by users. Here we introduce it with categories. The information in every card contains the date of adding that cost/income, its amount, name, category. In this page user have an opportunity to edit and  delete those cards. There are also many opportunities for filtering cards. Here they are: You can filter it by amount, cost or income ingredient, by date (daily, monthly, yearly). You also can search every card created by you through category name. Being in this page you also can add cost/income.',
    categoriesHelp: 'In page Categories you have an opportunity to create new cost or income category. You can do that by clicking on the appropriate button, choosing category type (cost or income), typing name and choosing the color of category in which it will be displayed in the graphic chart. After adding it will be reflected on our summery table, which include cost or income ingredient’s category and its type. In this page user have an opportunity to edit and  delete added categories. You can filter by category type (total/cost/income). Being in this page you also can add cost/income.',
    chartsHelp: 'In page Charts with red and green colors are introduced accordingly cost and income categories types. Those are introduce costs and income dynamic for a certain period of time. Here also user have opportunity to filter the data. The first filter is by current and upcoming costs and income. Whit next filter you can choose a graph by date or by amount. Being in this page you also can add cost/income.',
    edit: 'Edit',
    delete: 'Delete',
    language: 'Laguage',
    currency: 'Currency',
  },

  HY: {
    expense: 'Ծախս',
    income: 'Եկամուտ',
    summary: 'Ամփոփում',
    history: 'Պատմություն',
    categories: 'Բաժիններ',
    category: 'Բաժին',
    charts: 'Դիագրամներ',
    chartsHeader: 'Ընդհանուր Ծախսեր և Եկամուտներ',
    chartType: 'Դիագրամա',
    addIncome: 'Եկամուտ',
    addExpense: 'Ծախս',
    sortByAmount: 'Տեսակավորել',
    ascendingOrder: 'Աճման կարգով',
    descendingOrder: 'Նվազման կարգով',
    type: 'Տեսակ',
    all: 'Ամբողջ',
    amount: 'Գումար',
    period: 'Ժամանակաշրջան',
    wholePeriod: 'Ամբողջ',
    daily: 'Օրեկան',
    monthly: 'Ամսեկան',
    yearly: 'Տարեկան',
    search: 'Որոնում',
    searchPlaceholder: 'Որոնել այստեղ',
    view: 'Ցուցադրում',
    currentState: 'Ընթացիկ',
    upcomingState: 'Առաջիկա',
    upcoming: 'Առաջիկա',
    addCategory: 'Նոր բաժին',
    selectColor: 'Ընտրել գույն',
    categoryType: 'Բաժնի Տեսակը',
    categoryName: 'Բաժնի անվանումը',
    cancel: 'Չեղարկել',
    done: 'Ընդունել',
    name: 'Անուն',
    total: 'Ընդհանուր',
    balance: 'Մնացորդ',
    ok: 'Ընդունել',
    deleteWarning: 'Համոզվա՞ծ եք, որ ցանկանում եք ընդմիշտ հեռացնել այս տարրը?',
    editItem: 'Խմբագրել նյութը',
    action: 'Գործողություն',
    editCategory: 'Խմբագրել կատեգորիան',
    date: 'Ամսաթիվ',
    snackbarAdd: 'Հաջողությամբ ավելացված է',
    snackbarEdit: 'Հաջողությամբ խմբագրվել է',
    snackbarDelet: 'Հաջողությամբ ջնջվել է',
    snackbarCancel: 'Գործողությունը չեղարկվել է',
    snackbarError: 'Սխալ: Սերվերը չի արձագանքում',
    byDate: 'Ըստ ամսաթվի',
    byAmount: 'Ըստ գումարի',
    help: 'Օգնություն',
    learn: 'Իմացեք, թե ինչպես օգտագործել ծրագիրը',
    aboutUs: 'Մեր մասին',
    aboutHelp: 'Ֆինանսների կառավարում հավելվածը իրենից ներկայացնում է միջոցները արդյունավետ տնօրինելու հնարավորություն: Դուք կարող եք օրվա ընթացքում ձեր կատարած ծախսերը և ստացած եկամուտները մուտքագրել հավելված, և այն կօգնի ստանալ ամփոփ հաշվետվություն ձեր օրեկան, ամսեկան, տարեկան կատարած ծախսերի և ստացած եկամուտների մասին: Այն հնարավորություն է տալիս նաև կատարված բոլոր ծախսերը և ստացած եկամուտները տեսնել գրաֆիկական աղյուսակի տեսքով, ինչն ավելի պատկերավոր է դարձնում ծախսերն ու եկամտները:',
    summaryHelp: 'Այս էջում դուք կարող եք ավելացնել օրվա ընթացքում կատարված ծախսերը, ստացած եկամուտները՝ ընտրելով համապատասխան կոճակները: Անհրաժեշտ է  ընտրել կատեգորիան եղած ցանկից, ավելացնել ծախսի/եկամտի անունը և գումարի չափը: Ավելացնելուց հետո այն կարտացոլվի բերված ամփոփ աղյուսակում, որը ներառում է ծախսային կամ եկամտային բաղադրիչի կատեգորիան, տեսակը և գումարի չափը: Էջում կա հնարավորություն տեսակավորելու ծախսերն ու եկամուտները ըստ գումարի չափի՝ աճման և նվազման կարգով, տեսակավորել ծախսերն ու եկամուտները, ինչպես նաև առանձնացնել ընթացիկ և ապագա ծախսումներ ու եկամուտներ:',
    historyHelp: 'Այս էջում ներկայացված են ավելացված բոլոր ծախսերի և եկամուտների պատմությունը: Յուրաքանչյուր քարտում ներառված տեղեկատվությունը պարունակում է ծախսի/եկամտի ավելացման ամսաթիվը, գումարի չափը, անվանումը և բաժինը: Առկա է քարտի խմբագրման և ջնջման հնարավորություն: Էջում կան նաև տեսակավորման բազմաթիվ հնարավորություններ: Դրանք են՝ տեսակավորում ըստ գումարի, եկամտային և ծախսային բաղադրիչի, ժամանակագրական տվյալի՝ օրեկան, ամսեկան, տարեկան: Դուք հնարավորություն ունեք նաև որոնելու ցանկացած ստեղծված քարտ ըստ նրա անվան: Գտնվելով այս էջում՝ կրկին կարող եք ավելացնել ծախս/եկամուտ:',
    categoriesHelp: 'Բաժիններ էջում դուք հնարավորություն ունեք ստեղծելու ծախսային կամ եկամտային նոր բաժիններ: Դա կարող եք անել՝ սեղմելով համապատասխան կոճակը, ընտրելով կատեգորիայի տեսակը՝ ծախս/եկամուտ,  գրելով անվանումը և ընտրելով գույնը, որով այն ցուցադրվելու է գրաֆիկական աղյուսակում: Ավելացնելուց հետո այն կարտացոլվի բերված ամփոփ աղյուսակում, որը ներառում է ծախսային կամ եկամտային բաղադրիչի կատեգորիան, տեսակը: Էջում առկա է խմբագրման և ջնջման հնարավորություն: Կարող եք տեսակավորել ըստ կատեգորիայի տեսակի՝ ամբողջը/եկամուտ/ծախս/: Գտնվելով այս էջում՝ կրկին կարող եք ավելացնել ծախս/եկամուտ:',
    chartsHelp: 'Դիագրամներ էջում կարմիր և կանաչ երանգավորմամբ ներկայացված են համապատասխանաբար ծախս և եկամուտ կատեգորիաների տեսակները: Դրանք ներկայացնում են որոշակի ժամանակահատվածի ընթացքում կատարված ծախսերի և ստացած եկամուտների դինամիկան: Այստեղ ևս կա հնարավորություն տեսակավորելու ըստ որոշ տվյալների: Առաջին տեսակավորման հանրավորությունը հավելվածը տալիս է ըստ ընթացիկ և առաջիկա ծախսերի ու եկամուտների: Տեսակավորման երկրորդ տեսակը հնարավորություն է տալիս ընտրելու գրաֆիկը՝ ըստ ամսաթվերի և ըստ գումարի: Գտնվելով այս էջում՝ կրկին կարող եք ավելացնել ծախս/եկամուտ:',
    edit: 'Խմբագրել',
    delete: 'Հեռացնել',
    language: 'Լեզու',
    currency: 'Արժույթ',
  },

  RU: {
    expense: 'Pасходы',
    income: 'Доходы',
    summary: 'Сводка',
    history: 'История',
    categories: 'Категории',
    category: 'Категория',
    charts: 'Диаграммы',
    chartsHeader: 'Общие расходы и доходы',
    chartType: 'Диаграмма',
    addIncome: 'Доход',
    addExpense: 'Расход',
    sortByAmount: 'Сортировать',
    ascendingOrder: 'По бозрастанию',
    descendingOrder: 'По убывания',
    type: 'Тип',
    all: 'Все',
    amount: 'Сумма',
    period: 'Период',
    wholePeriod: 'Весь период',
    daily: 'Суточный',
    monthly: 'Месячный',
    yearly: 'Годовой ',
    search: 'Поиск',
    searchPlaceholder: 'Поиск в истории',
    view: 'Показать',
    currentState: 'Текущее',
    upcomingState: 'Предстоящее',
    upcoming: 'Предстоящее',
    addCategory: 'Категория',
    selectColor: 'Выбрать вет',
    categoryType: 'Тип категории',
    categoryName: 'Название категории',
    cancel: 'Отмена',
    done: 'Применить',
    name: 'Название',
    total: 'Всего',
    balance: 'Баланс',
    ok: 'Принять',
    deleteWarning: 'Вы уверены, что хотите удалить этот пункт?',
    editItem: 'Редактирование',
    action: 'Действие',
    editCategory: 'Редактировать категорию',
    date: 'Дата',
    snackbarAdd: 'Успешно обавлено',
    snackbarEdit: 'Успешно отредактировано',
    snackbarDelet: 'Успешно удалено',
    snackbarCancel: 'Действие было отменено',
    snackbarError: 'Oшибка: Сервер не отвечает',
    byDate: 'По дате ',
    byAmount: 'По сумме',
    help: 'Помощь',
    learn: 'Узнайте, как использовать программу',
    aboutUs: 'О нас',
    aboutHelp: 'Приложение для управления финансами - это возможность более эффективно управлять своими средствами. Вы можете импортировать полную информацию о ваших ежедневных доходах и расходах, а приложение поможет вам получить компактные отчеты о ваших ежедневных, ежемесячных, годовых расходах и доходах. Это также дает вам возможность увидеть все ваши расходы и доходы на графиках, которые помогут вам собрать исчерпывающую информацию обо всех компонентах затрат и доходов в общем результате.',
    summaryHelp: 'На этой странице вы можете добавить расходы и доходы, нажав на соответствующие кнопки. Нужно выбрать категорию из нашего списка, добавить название расхода / дохода и его сумму. После добавления оно будет отражено в нашей итоговой таблице, в которую будут включены категория, тип и сумма ингредиента для дохода или расхода. Здесь у вас есть возможность отфильтровать все затраты и доходы по их сумме в порядке возрастания или убывания, отфильтровать все типы расходов и доходов, а также разделить текущие и предстоящее расходы и доходы.',
    historyHelp: 'На этой странице представлены все расходы и доходы, которые добавляются пользователями. Здесь мы представляем это с категориями. Информация в каждой карточке содержит дату добавления этой стоимости / дохода, ее сумму, имя, категорию. На этой странице пользователь имеет возможность редактировать и удалять эти карточки. Есть также много возможностей для фильтрации карт. Вот они: Вы можете фильтровать их по количеству, стоимости или доходу, по дате (ежедневно, ежемесячно, ежегодно). Вы также можете искать каждую созданную вами карту по названию категории. Находясь на этой странице вы также можете добавить стоимость / доход.',
    categoriesHelp: 'На странице Категории у вас есть возможность создать новую категорию расхода или дохода. Вы можете сделать это, нажав на соответствующую кнопку, выбрав тип категории (расход или доход), введя имя и выбрав цвет категории, в которой она будет отображаться на графической диаграмме. После добавления оно будет отражено в сводной таблице, в которой указана категория ингредиента по его типу: стоимости или дохода. На этой странице пользователь имеет возможность редактировать и удалять добавленные категории. Вы можете фильтровать по типу категории (общая / стоимость / доход). Находясь на этой странице вы также можете добавить расход / доход.',
    chartsHelp: 'На странице Диаграмы с красным и зеленым цветами представлены соответственно типам категорий затрат и доходов. Они представляют собой динамику затрат и доходов за определенный период времени. Здесь также пользователь имеет возможность фильтровать данные. Первый фильтр - по текущим и предстоящим затратам и доходам. Следующим фильтром вы можете выбрать график по дате или по сумме. Находясь на этой странице вы также можете добавить расод/ доход.',
    edit: 'Изменить',
    delete: 'Удалить',
    language: 'Язык',
    currency: 'Валюта',
  },
};

export default messages;
