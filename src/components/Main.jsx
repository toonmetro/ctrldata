import React from "react";
import {OrgDiagram} from 'basicprimitivesreact';
import primitives from 'basicprimitives';
import DatePicker from 'DatePicker';
import ru from "date-fns/locale/ru";

var photos = {
    a: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGnSURBVGhD7dnBbQJBDAVQk1o2QjlQwKYGzpSwKQfq4IxICRTB9jLZHCJFwWv7/7EiDt6zmX2yPYMHNq01eb7n5flI36JiIXWpbFW2kAwgsdVblS0kA0hs9db/ZWs+vW/Wno9PxPE3dhls6Od+HI1XT1d64Sb8R5utEulwdbA8VY+LZ/kqkfF456pBHxDz5Xxze/p2vsxukBbAshTVOE0PO4B2cUlWKrgUTKsrV0eut3RVU/cm5aKKqPXVbjuIDPtDUh2JImq1+jmjkupIFNFStXadHncWXkecpb3393me4oJZnionXyjLV6W4QFZEleHCWNG+0eKggQJiRVV6vhAXwoqrul0AC1H1uuIsTLUyukYH1jBL7WJ8lgq6oqwkVXSQDrLSVEFXjJWoirlCrFRVyBVhJasirgCr65tEv7a5A5jL0tcN7vNl9OVcHqtXRbocVr+Kc9k3H/3qPL69Ise7dh0SsS+2JmtFddgvdy/gGbY7Jdp2GRcyrlu1BfUjxtiPRm/lqVbGHOMHnU39zQm0I/UbBLA+GVosJHGVrcoWkgEktnoLydYXkF/LiXG21MwAAAAASUVORK5CYII=',
    b: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHFSURBVGhD7dk/bsIwFAZwp2dJOqCeIJwAunTqEcIYDsDYrUsYm61rJ5YmJyAnqDo03CW1XSIh4vi9l+o90eKsWOLnz3/4IqKu69TlPTeXRzKiwKKsS0grpEVJgDI27K2QFiUBytg/u7cO23n0i2dVU1Lqx7KnVS7tnIg6dtZx/kZHoEmxjE7TsDJJlpXhYMIsDXvaHuBDMJGVFq1u296nLVLn1zdv77BrIguer4rzfeekYVx8LCOP802GmMFwCC9LqWTmXkoAy81yff3dbQxFyM1qP5tzQjpLIBXzC1m9WpYD1eM9GBYfy/7CO1DFaw6rlIKuH/chB1fBPQBx3f14uPfWCU+b9qikxF72bUpokxirWSe00iW4iLbZIKuNKAtfuiayMEdqrELo0OZQuZnIwlwQpkKMXC/N+tn/5sHIsnRtq1wlotx5XdwsLVs8uFwfX74yKMDCLPj5mOtl1btBiwADZE/L1W20KvXXG07WSLexUUENVbTY9IsH3sacaY3uoGwDFRx5lk7qZQHteWlWVqFqlyDLbig4KBukBCur7LlCxXRc3Sj8nwjt85PPJRaRwOmHBhYltJBWSIuSAGVs2Fv/IK1vKZY5XO2KxFcAAAAASUVORK5CYII=',
    c: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHJSURBVGhD7ZnNccIwEIVxagEODBWYfkg70EbuIR1QAcMBuxfFjklixpLeeyuS8WF1ZaX99q1+dk0VQljMb7zMD6knciwlL66Wq6UooNj63nK1FAUU2/K99fFaxcfu2Cokj7bdU20azaFmne5PsoeFPCOE054FGtlpbCqWCelOVx8aVgQJq4RpQGPJeKxypoGMyiaLlYWaesqZM4pxWEkvWRfJw4rBGKzU8kw64gFBLgLLuPL3oYtOR1wYK07FKHUHi4oNuCCWKdjH62nExUaDsCyhsndmxg481e3723n60mzXS8Pzo0wBWM01QlVvVooLi62lsPl7sUBX3d4ulljL51jUKvcKV3AsKNHIIK/Wcr1VFnuerSWJl1tB78ChA6zVJtJInK8Nt7jdCmDFs6jK1R53VaX1Z+gBe+5TzdbN6KkOiRqQLQW6qC31GsSyLfubg0RYpfVWMlyqh7HW24RaIZVI1Pel2x+4BSisHFi09ct/oIBQ3T8Y6CT+/D7L9rWnEz7SJC9SQqneFa/WIFuRZiSTAcuMxiNZ1LJsNY3oy4OaxMkJSW841DnnDlvVo81vWOqtf4jCsRSRXS1XS1FAsfW95WopCii2n0mWgWSKWlxrAAAAAElFTkSuQmCC'
};

export function Main() {
    //registerLocale("ru", ru);
    const config = {
        pageFitMode: primitives.common.PageFitMode.AutoSize,
        autoSizeMinimum: {width: 100, height: 100},
        cursorItem: 0,
        highlightItem: 0,
        hasSelectorCheckbox: primitives.common.Enabled.True,
        items: [
            {
                id: 0,
                parent: null,
                title: 'Scott Aasrud',
                description: 'VP, Public Sector',
                image: photos.a
            },
            {
                id: 1,
                parent: 0,
                title: 'Ted Lucas',
                description: 'VP, Human Resources',
                image: photos.b
            },
            {
                id: 2,
                parent: 0,
                title: 'Fritz Stuger',
                description: 'Business Solutions, US',
                image: photos.c
            }
        ]
    };

    return (
        <main role="main">
            

            <section className="jumbotron text-center">
                <div className="container">
                    <h1>Album example</h1>
                    <p className="lead text-muted">Something short and leading about the collection below—its contents,
                        the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it
                        entirely.</p>
                    <p>
                        <a href="#" className="btn btn-primary my-2">Main call to action</a>
                        <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                    </p>
                </div>
            </section>

            <div class="container">
            <div class="row">
                <div class="col-sm">
                Начиная с 
                <DatePicker
                    type="input"
                    //value={this.state.date}
                    //onChange={this.onChange}
                    format="dd.MM.yyyy, HH:mm"
                    //locale={ru}
                />
                </div>
                <div class="col-sm">
                по 
                <DatePicker
                    type="input"
                    //value={this.state.date}
                    //onChange={this.onChange}
                    format="dd.MM.yyyy, HH:mm"
                    //locale={ru}
                />
                </div>

                <div class="col-sm">
                    <div class="dropdown">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            Размер фрейма
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Link 1</a>
                            <a class="dropdown-item" href="#">Link 2</a>
                            <a class="dropdown-item" href="#">Link 3</a>
                        </div>
                    </div>

                </div>
            </div>
            </div>



            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row justify-content-center">
                        <OrgDiagram centerOnCursor={true} config={config} />

                    </div>
                </div>
            </div>

        </main>
    )

}