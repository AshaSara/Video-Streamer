import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { listStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {

    componentDidMount() {

        this.props.listStream(this.props.match.params.id);
    }

    renderActions() {
        return (
            <div>
                <button onClick={() => this.props.deleteStream(this.props.match.params.id)}
                    className="ui negative button">Delete</button>

                <Link to="/" className="ui button">Cancel</Link>
            </div >
        );
    }

    renderContent() {

        if (!this.props.stream) {
            return 'Are your sure you want to delete this stream?'
        }
        return `Are your sure you want to delete the stream with Title : ${this.props.stream.title}`
    }

    render() {
        return (
           <Modal
                title="Delete Stream"
                content={this.renderContent()}
                action={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { listStream, deleteStream })(StreamDelete);