import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

const layoutSizesEnum = {
    MOBILE: 'mobile',
    TABLET: 'tablet',
    DESKTOP: 'desktop',
}

class ResponsiveLayout extends Component {

    render() {
        return(
            <div>
                <MediaQuery maxWidth={768}>
                    {(matches) => matches ? this.props.children(layoutSizesEnum.MOBILE) : null}
                </MediaQuery>
                <MediaQuery minWidth={768} maxWidth={1023}>
                    {(matches) => matches ? this.props.children(layoutSizesEnum.TABLET) : null}
                </MediaQuery>
                <MediaQuery minWidth={1024}>
                    {(matches) => matches ? this.props.children(layoutSizesEnum.DESKTOP) : null}
                </MediaQuery>
            </div>
        )
    }

}

export { ResponsiveLayout as default, layoutSizesEnum }