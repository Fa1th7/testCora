/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

const staticRelated = [
  {
    name: "Random name",
    brand: "Brand",
    price: "$300",
  },
  {
    name: "Random name",
    brand: "Brand",
    price: "$300",
  },
  {
    name: "Random name",
    brand: "Brand",
    price: "$300",
  },
  {
    name: "Random name",
    brand: "Brand",
    price: "$300",
  },
  {
    name: "Random name",
    brand: "Brand",
    price: "$300",
  },
  {
    name: "Random name",
    brand: "Brand",
    price: "$300",
  },
];

const App = () => {
  const [isAddCartCrossed, setAddCartCrossed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const scrollRef = useRef();

  useEffect(() => {
    if (contentHeight) {
      console.log(scrollPosition)
      if (scrollPosition > 226.5) {
        setAddCartCrossed(true);
      } else {
        setAddCartCrossed(false);
      }
    }
  }, [scrollPosition, contentHeight]);

  const renderRelated = ({ item, index }) => {
    return (
      <View
        style={{
          height: 150,
          width: 150,
          marginLeft: 20,
          borderColor: "#dfe6e8",
          borderWidth: 1,
        }}
      >
        <Image
          source={require("./assets/images/food.jpeg")}
          style={{ height: "70%", width: "100%" }}
          resizeMethod="resize"
          resizeMode="contain"
        />
        <View style={{ paddingLeft: 5 }}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView
        ref={scrollRef}
        onLayout={(event) => {
          if (scrollRef.current) {
            scrollRef.current.measure((x, y, width, height, pageX, pageY) => {
              setContentHeight(height);
            });
          }
        }}
        onScroll={(e) => {
          setScrollPosition(e.nativeEvent.contentOffset.y);
          if (contentHeight !== e.nativeEvent.layoutMeasurement.height) {
          }
        }}
        //contentInsetAdjustmentBehavior="automatic"
      >
        <Image
          source={require("./assets/images/food.jpeg")}
          style={styles.productImage}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>My healthy food</Text>
          <Text style={styles.brand}>Nestle</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 20,
            paddingTop: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: 100,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                ...styles.price,
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
              }}
            >
              $400
            </Text>
            <Text style={{ ...styles.price, fontWeight: "bold" }}>$320</Text>
          </View>
          <Text style={styles.discount}>20% off</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc. There are many variations of passages
            of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of
            Lorem Ipsum, you need to be sure there isn't anything embarrassing
            hidden in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#13bfed",
            height: 60,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>Add to cart</Text>
        </TouchableOpacity>

        <View>
          <Text>Will be delivered on 8th december</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Cancellation policy
          </Text>
          <Text>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Refund policy
          </Text>
          <Text>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Similar Products
        </Text>
        <FlatList
          contentContainerStyle={{ marginVertical: 10, height: 200 }}
          horizontal
          data={staticRelated}
          keyExtractor={(item, index) => index}
          renderItem={renderRelated}
        />
      </ScrollView>
      {!isAddCartCrossed ? (
        <View
          style={{
            backgroundColor: "#13bfed",
            height: 60,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>Add to cart</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
  productImage: {
    height: 250,
    width: "100%",
    resizeMode: "contain",
  },

  title: {
    fontWeight: "900",
    fontSize: 25,
  },
  subtitle: {
    fontSize: 15,
  },
  price: {
    fontSize: 20,
  },
  discount: {
    color: "green",
  },
});

export default App;
