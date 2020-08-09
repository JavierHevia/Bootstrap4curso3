import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { Text, ScrollView, FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseimg } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
}

function RenderItem(props) {

    const item = props.item;
    //alert(item[0].id)

    return (
        <ScrollView>
            <Card title="Our History">
                <Text style={{ margin: 10 }}>
                    Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
            </Text>
                <Text style={{ margin: 10 }}>
                    The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
            </Text>
            </Card>
            <Card title="Coporate Leadership">
                <ListItems item={item} />
            </Card>
        </ScrollView>
    );
}

function ListItems(props) {
    const item = props.item;
    //alert(item.id)
    const renderMenuItem = ({ item, index }) => {

        return (
            <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                onPress={() => navigate('Dishdetail', { dishId: item.id })}
                leftAvatar={{ source: { uri: baseimg + item.image } }}
            />
        );
    };


    if (item.leaders.isLoading) {
        alert("cargando")
        return (
            <ScrollView>
                <History />
                <Card
                    title='Corporate Leadership'>
                    <Loading />
                </Card>
            </ScrollView>
        );
    }
    else if (item.leaders.errMess) {
        return (
            <ScrollView>
                <History />
                <Card
                    title='Corporate Leadership'>
                    <Text>{item.leaders.errMess}</Text>
                </Card>
            </ScrollView>
        );
    } else {
       
        return (
            
            <FlatList
                data={item.leaders}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

class About extends Component {

    static navigationOptions = {
        title: 'About'
    };

    render() {
        return (
            <RenderItem item={this.props.leaders} />
            // <RenderItem item={this.props.leaders.leaders} />
        );
    }
}

export default connect(mapStateToProps)(About);