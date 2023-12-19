import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option`
    
`

const ProductList = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Announcement></Announcement>
      <Title>Product Listing</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
                Region
            </Option>
            <Option>Africa</Option>
            <Option>Central America</Option>
            <Option>South America</Option>
            <Option>Asia Pacific</Option>
            <Option>Middle East</Option>
          </Select>
          <Select>
            <Option disabled selected>
                Grind Option
            </Option>
            <Option>Whole Bean</Option>
            <Option>Coarse Grind</Option>
            <Option>Medium-Coarse Grind</Option>
            <Option>Medium Grind</Option>
            <Option>Fine Grind</Option>
            <Option>Extra Fine Grind</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
            <Select>
                <Option selected>
                    Newest
                </Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  );
};

export default ProductList;
