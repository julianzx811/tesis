import { Text, Card, Button, Icon } from '@rneui/themed';
import React from 'react'

export default function ProductsComponent({productName,ProductId}) {
  return (
    <Card key={ProductId}>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri:
              'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
          }}
        />
        <Text style={{ marginBottom: 10 }}>
          {productName}
        </Text>
        <Button
          icon={
            <Icon
              name="code"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
  )
}