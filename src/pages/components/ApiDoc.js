import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function ApiDoc(props) {
    const {swaggerUrl} = props;
        if (ExecutionEnvironment.canUseDOM) {
            /// Make sure we only import the rapidoc web component in case we are on the client side
            import('rapidoc');
            return (<rapi-doc header-color={"#004876"}
                  nav-text-color={"#004876"}
                  primary-color={"#ff9e1b"}
                  nav-bg-color={"#ffffff"}
                  id="thedoc"
                  allow-search={false}
                  render-style={"read"}
                  allow-try={true}
                  show-header={false}
                  allow-authentication={true}
                  regular-font="Roboto"
                  use-path-in-nav-bar={true}
                  style={{height: "80vh", width: "100%"}}
                  mono-font="monospace" theme={"light"}
                  spec-url={swaggerUrl}>
            </rapi-doc>)}
        return <div/>
}
