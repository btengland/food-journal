import '../../reset.css'
import './Meals.css'
import React, { useState, useEffect } from 'react'
import { addMeal } from '../../ducks/mealReducer'
import { connect } from 'react-redux'
import axios from 'axios'

const Meals = (props) => {
    const [date, setDate] = useState('')
    const [mealType, setMealType] = useState('')
    const [foodItems, setFoodItems] = useState([])
    const [mood, setMood] = useState(0)

    function unCheck() {
        let x = document.getElementsByClassName("check");
        for (let i = 0; i <= x.length; i++) {
            x[i].checked = false;
        }
    }


    const handleMeal = async (e) => {
        e.preventDefault()
        try {
            const meal = await axios.post('/api/foods', { mealType, date, foodItems, mood })
            props.addMeal(meal.data)
            setDate('')
            setMealType('')
            setFoodItems([])
            setMood(0)
            unCheck()
        }
        catch (err) { console.log(err) }

    }

    return (
        <form className='meal-input'>
            <div className='journal-contanier'>
                <div>
                    <h2 className='today'>Today's Entry</h2>
                </div>
                <div className='left-box'>
                    <div className='journal-top'>
                        <label className='meal-space'>
                            <p3>Meal Date:</p3>
                            <input type='date' onChange={e => setDate(e.target.value)} />
                        </label>
                        <label className='meal-space'>
                            <p3>Meal Type:</p3>
                            <select className='drop-down' onChange={e => setMealType(e.target.value)}>
                                <option value=''>--Please Choose A Meal--</option>
                                <option value='Breakfast'> Breakfast </option>
                                <option value='Lunch'> Lunch </option>
                                <option value='Dinner'> Dinner </option>
                                <option value='Snack'> Snack </option>
                            </select>
                        </label>
                    </div>
                    <section className='allergin-list'>
                        <p2> What Was In Your Meal? </p2>
                        <div className='allergins'>
                            <div className='outer-label'>
                                <div className='seperate'>
                                    <label className='labels'>
                                        <input className='check' type='checkbox' value='Gluten' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                    Gluten
                                </label>
                                    <label className='labels'>
                                        <input className='check' type='checkbox' value='Onions' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                    Onions
                                </label>
                                    <label className='labels'>
                                        <input className='check' type='checkbox' value='Dairy' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                    Dairy
                                </label>
                                </div>
                                <div className='seperate'>
                                    <label className='labels'>
                                        <input className='check' type='checkbox' value='Raw Vegetables' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                    Raw Vegetables
                                </label>
                                    <label className='labels'>
                                        <input className='check' type='checkbox' value='Nuts' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                    Nuts
                                </label>
                                    <label className='labels'>
                                        <input className='check' type='checkbox' value='Caffeine' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                    Caffeine
                                </label>
                                </div>
                            </div>
                            <div className='outer-label'>
                                <div className='seperate'>
                                    <label className='labels'>
                                        <input className='check' type='checkbox' value='Popcorn' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                    Popcorn
                                </label>
                                    <label className='labels'>
                                        <input className='check' type='checkbox' value='Soy' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                    Soy
                                </label>
                                    <label className='labels'>
                                        <input className='check' type='checkbox' value='Citrus' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                    Citrus
                                </label>
                                </div>
                                <div className='seperate'>
                                    <label className='labels'>
                                        <input className='check' type='checkbox' value='Beans' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                Beans
                            </label>
                                    <label className='labels'>
                                        <input className='check' type='checkbox' value='Garlic' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                Garlic
                            </label>
                                    <label className='labels'>
                                        <input className='check' type='checkbox' value='Eggs' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                Eggs
                            </label>
                                </div>
                            </div>
                            <div className='seperate'>
                                <label className='labels'>
                                    <input className='check' type='checkbox' value='Shellfish' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                Shellfish
                            </label>
                                <label className='labels'>
                                    <input className='check' type='checkbox' value='Red Meat' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                Red Meat
                            </label>
                                <label className='labels'>
                                    <input className='check' type='checkbox' value='Fructose' onChange={e => e.target.checked ? setFoodItems([...foodItems, e.target.value]) : setFoodItems(foodItems.filter(i => i !== e.target.value))} />
                                Fructose(sugar)
                            </label>
                            </div>
                        </div>
                    </section>
                    <div className='submit hide'>
                        <button className='submit-size' onClick={handleMeal} > Submit </button>
                    </div>
                </div>
                <div className='rating-outer'>
                    <section className='mood-rating'>
                        <p> How Are You Feeling? </p>
                        <div className='rating'>
                            <div className='bad'>
                                <p>Bad</p>
                            </div>
                            <div>
                                <label for='1' > 1 </label>
                                <input className='check' name='mood' type='radio' id='1' value={1} onClick={e => setMood(e.target.value)} />
                            </div>
                            <div>
                                <label for='2' > 2 </label>
                                <input className='check' name='mood' type='radio' id='2' value={2} onClick={e => setMood(e.target.value)} />
                            </div>
                            <div>
                                <label for='3' > 3 </label>
                                <input className='check' name='mood' type='radio' id='3' value={3} onClick={e => setMood(e.target.value)} />
                            </div>
                            <div>
                                <label for='4' > 4 </label>
                                <input className='check' name='mood' type='radio' id='4' value={4} onClick={e => setMood(e.target.value)} />
                            </div>
                            <div>
                                <label for='5' > 5 </label>
                                <input className='check' name='mood' type='radio' id='5' value={5} onClick={e => setMood(e.target.value)} />
                            </div>
                            <div>
                                <label for='6' > 6 </label>
                                <input className='check' name='mood' type='radio' id='6' value={6} onClick={e => setMood(e.target.value)} />
                            </div>
                            <div>
                                <label for='7' > 7 </label>
                                <input className='check' name='mood' type='radio' id='7' value={7} onClick={e => setMood(e.target.value)} />
                            </div>
                            <div>
                                <label for='8' > 8 </label>
                                <input className='check' name='mood' type='radio' id='8' value={8} onClick={e => setMood(e.target.value)} />
                            </div>
                            <div>
                                <label for='9' > 9 </label>
                                <input className='check' name='mood' type='radio' id='9' value={9} onClick={e => setMood(e.target.value)} />
                            </div>
                            <div>
                                <label for='10' > 10 </label>
                                <input className='check' name='mood' type='radio' id='10' value={10} onClick={e => setMood(e.target.value)} />
                            </div>
                            <div className='good'>
                                <p>Good</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='submit-small'>
                    <button className='submit-size' onClick={handleMeal} > Submit </button>
                </div>
            </div>
        </form>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { addMeal })(Meals)