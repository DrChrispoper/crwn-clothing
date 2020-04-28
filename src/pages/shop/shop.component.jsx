import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from './../../components/collections-overview/collections-overview.components';
import CollectionPage from '../../pages/collection/collection.component';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import {
  firestore,
  ConvertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

class ShopPage extends React.Component {
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = ConvertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
