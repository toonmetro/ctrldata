#
# Массив с компонентами, коротые нужно рендерить между Header и Footer
#
# ctype    = 'edit'                       - тип компонента из библиотек: Bootstrap / OrgDiagram / Кастомный контрол
# caption  = 'Edit field caption'         - титульное название для того, что-бы озаглавить компонент на странице
# par_name = 'text'                       - название параметра - ключ map`ы, которая возвращается серверу
# val      = 'Text for render on control' - текущее состояние компонента, простой или сложный тип
#                                         - например: значение строки в Edit, поставленый флажок, id выбранные элементы списка,
#                                         -   структура диаграммы
#

root = list([
    dict( id = 1
        , ctype    = 'edit'
        , caption  = 'Edit field caption'
        , par_name = 'text'
        , val      = 'Text for render on control'
    ),
    dict( id = 2
        , ctype    = 'diagram'
        , caption  = 'Title of diagram'
        , par_name = 'diagram'
        , val      =
            dict( pageFitMode     = 'primitives.common.PageFitMode.AutoSize'
                , autoSizeMinimum = dict(width = 100, height = 100)
                , cursorItem      = 0
                , highlightItem   = 0
                , hasSelectorCheckbox = 'primitives.common.Enabled.True'
                , items = list([
                    dict( id = 0
                        , parent = None
                        , title  = 'Scott Aasrud'
                        , descriptionc = 'VP, Public Sector'
                        , image = 'photos.a'
                    ),
                    dict( id     = 1
                        , parent = 0
                        , title  = 'Ted Lucas'
                        , description = 'VP, Human Resources'
                        , image  = 'photos.b'
                    ),
                    dict( id     = 2
                        , parent = 0
                        , title  = 'Fritz Stuger'
                        , description = 'Business Solutions, US'
                        , image  = 'photos.c'
                    )
                ])
            )
    ),
    dict( id = 3
        , ctype    = 'datetime'
        , caption  = 'Начало'
        , par_name = 'dbegin'
        , val      = '11.01.2020, 11:00'
    ),
    dict( id = 4
        , ctype    = 'datetime'
        , caption  = 'Окончание'
        , par_name = 'dbegin'
        , val      = '12.01.2020, 11:00'
    ),
    dict( id = 5
        , ctype    = 'dropdown'
        , caption  = 'Ширина фрейма'
        , par_name = 'dframe'
        , val='11.01.2020, 11:00'
    )
])