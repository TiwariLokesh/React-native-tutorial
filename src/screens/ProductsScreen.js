import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const ProductsScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (hasMore) {
      fetchProducts(page);
    }
  }, [page]);

  const fetchProducts = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`);
      const newProducts = response.data.products;

      if (newProducts.length === 0) {
        setHasMore(false);
      }

      setProducts(prevProducts => [...prevProducts, ...newProducts]);

      // Stop fetching if we have reached 30 products
      if (products.length + newProducts.length >= 30) {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image
        source={{ uri: item.images[0] }}
        style={styles.productImage}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </View>
  );

  const renderFooter = () => {
    if (loading) return <Text>Loading...</Text>;

    return (
      hasMore && (
        <View style={styles.footer}>
          <Button title="Load More" onPress={() => setPage(prevPage => prevPage + 1)} />
        </View>
      )
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
      numColumns={2}
      ListFooterComponent={renderFooter}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  productContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  productDetails: {
    marginTop: 10,
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  footer: {
    padding: 10,
    alignItems: 'center',
  },
});

export default ProductsScreen;
