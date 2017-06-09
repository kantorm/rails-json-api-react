import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { ErrorAlert, Loading, EditHeader } from '../UI';
import { withResource } from '../../hocs';
import PostForm from './PostForm';
import {
  fetchList,
  getMany,
} from '../../store/api';

export class PostEdit extends Component {
  componentWillMount() {
    const { params, fetchResource, fetchCategories } = this.props;

    fetchCategories();

    if (params.id) {
      fetchResource({ id: params.id, include: 'category' });
    }
  }

  render() {
    const { isNew, error, loading, resource, onSubmit, categories } = this.props;

    if (error) {
      return (<ErrorAlert {...error} />);
    }

    if (loading) {
      return (<Loading/>);
    }

    return (
      <div>
        <EditHeader {...this.props}>{ isNew ? 'New Post' : resource.title }</EditHeader>
        <PostForm initialValues={resource} categories={categories} onSubmit={onSubmit} />
      </div>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  categories: getMany(state, 'categories'),
});

export const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchList('categories', { page: { limit: 999 } })),
  redirectToIndex: () => dispatch(push('/posts')),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withResource('posts')(PostEdit),
);
