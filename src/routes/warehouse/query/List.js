import React from 'react';
import { connect } from 'dva'; 
import styles from './style.scss';

class List extends React.Component {
    render() {
        // console.log(this.props.warehouse);
        const wareData = this.props.warehouse;
        // console.log(wareData.wareData);
        return (
            <React.Fragment>
                <h2>warehouse query list</h2>
                <h2>只有当routeConfig中导入 <b>warehouse</b> Modal,类似 <b className={styles.red}>['warehouse']</b></h2>
                <h2>并且在当前组件中通过<b className={styles.red}>connect</b> 关联modal时， wareData才可以取到！</h2>
                <span>wareData:</span>
                <span className={styles.wareData}>{wareData.wareData}</span>
            </React.Fragment>
            
        )
    }
}

// export default List;
export default connect(({ warehouse }) => ({
    warehouse
}))(List);