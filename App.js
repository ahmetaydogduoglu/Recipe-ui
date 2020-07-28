import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"
export default function App() {
  return (
    <Container>
      <RecipeImageBackground source={require("./assets/recipe.jpg")} imageStyle={{ opacity: 1 }}>
        <SafeAreaView>
          <MenuBar>
            <Back>
              <MaterialIcons name="arrow-back" color="#fff" size={24} />
              <Text small style={{ marginLeft: 7 }}>Ingredients</Text>
            </Back>
            <TouchableOpacity>
              <MaterialIcons name="favorite" color="#fff" size={24} />

            </TouchableOpacity>
          </MenuBar>

          <MainRecipe>
            <RecipeTextContainer>
              <Text title>Spicy Shrimp</Text>
              <Divider />
              <Text bold>80 calories per 100g</Text>
              <Text bold>3g fat | 10g protein | 8g carbs</Text>
            </RecipeTextContainer>
          </MainRecipe>
          <Button><Text>Learn More</Text></Button>
        </SafeAreaView>
      </RecipeImageBackground>
    </Container>
  );
}

const Container = styled.View`
  flex:1;
  
`

const Text = styled.Text`
  color:${({ dark }) => (dark ? "#000" : "#fff")};
  font-weight:${(props) => (props.bold ? "bold" : 600)}
  ${({ title, large, small }) => {
    switch (true) {
      case title:
        return "font-size: 32px;"
      case large:
        return "font-size: 20px;"
      case small:
        return "font-size: 13px;"
    }
  }}
`

const RecipeImageBackground = styled.ImageBackground`
  width:100%;
`

const MenuBar = styled.View`
  flex-direction:row;
  justify-content:space-between;
  padding:16px
`
const Back = styled.TouchableOpacity`
flex-direction:row;
align-items: center;
background-color: rgba(0,0,0,.5);
padding:5px
border-radius:5px
`
const MainRecipe = styled.View`
  padding: 0 15px;
  margin: 180px 0  25px;
`

const RecipeTextContainer = styled.View`
background-color: rgba(0,0,0,.5);
padding:5px;
align-self: flex-start;
border-radius:5px
`

const Divider = styled.View`
     border-bottom-color:#fff;
     border-bottom-width:2px;
     width:150px;
     margin:8px 0px; 
`
const Button = styled.TouchableOpacity`
  margin: 0 0 30px 15px;
  background-color:rgba(255,255,255,.7);
  align-self:flex-start;
  padding:5px 16px;
  border-radius:100px
 `

