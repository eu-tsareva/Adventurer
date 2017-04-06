import React from 'react';

class Achievments extends React.Component {
  constructor() {
    super();
    this.state = {
      "data": [
        {
          "title": "Lorem ipsum dolor sit amet",
          "body": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sagittis nulla non elit dignissim suscipit. Duis lorem
                  nulla, eleifend Ut urna dui, interdum non blandit sed, hendrerit ultricies mi.
                  Aliquam at scelerisque ligula. Curabitur id laoreet velit.`,
          "id": 0
        },
        {
          "title": "Lorem ipsum dolor sit amet",
          "body": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sagittis nulla non elit dignissim suscipit. Duis lorem
                  nulla, eleifend Ut urna dui, interdum non blandit sed, hendrerit ultricies mi.
                  Aliquam at scelerisque ligula. Curabitur id laoreet velit.`,
          "id": 1
        },
        {
          "title": "Lorem ipsum dolor sit amet",
          "body": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sagittis nulla non elit dignissim suscipit. Duis lorem
                  nulla, eleifend Ut urna dui, interdum non blandit sed, hendrerit ultricies mi.
                  Aliquam at scelerisque ligula. Curabitur id laoreet velit.`,
          "id": 2
        }
      ]
    };
  }


  render() {
    return (
          <ul className="collapsible col s12 m6" data-collapsible="accordion">
            {
              this.state.data.map((item, index) =>
              <li key={ item.id }>
                <div className="collapsible-header active">{ item.title }</div>
                <div className="collapsible-body">
                  <p>{ item.body }</p>
                </div>
              </li>)
            }
          </ul>
    );
  }
}

export default Achievments;
