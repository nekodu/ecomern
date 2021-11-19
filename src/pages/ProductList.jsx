import  Announcement from "../components/Announcements"
import  styled  from "styled-components"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container =styled.div``
const Title =styled.h1`
margin: 20px;
`
const FilterContainer =styled.div`
display: flex;
justify-content: space-between;
`
const Filter =styled.div`
margin: 20px;
`
const FilterText=styled.span`
font-size: 20px;
font-weight: 600;
`

const Select=styled.select``
const Option=styled.option``

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
