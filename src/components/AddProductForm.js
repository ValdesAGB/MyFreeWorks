import React, { useContext, useEffect } from 'react';
import { addProductElement } from '../data';
import { NewProductContext } from '../untils/context';

function AddProductForm() {
  const {
    setName,
    setDescription,
    setPrice,
    setCover,
    setIsSold,
    setSoldPrice,
    isSold,
    cover,
    newProduct,
  } = useContext(NewProductContext);

  const set = (id, event) => {
    switch (id) {
      case 'nameProd':
        setName(event.target.value);
        break;
      case 'descriptionProd':
        setDescription(event.target.value);
        break;
      case 'priceProd':
        setPrice(event.target.value);
        break;
      case 'coverProd':
        setCover(event.target.value);
        break;
      case 'soldPriceProd':
        setSoldPrice(event.target.value);
        break;
      default:
        setIsSold(event.target.checked);
        break;
    }
  };

  const save = (e) => {
    e.preventDefault();
    console.log(newProduct);
  };

  useEffect(() => {
    if (!isSold) {
      setSoldPrice(0);
    }
  }, [isSold]);

  return (
    <React.Fragment>
      <form className="col-12 col-sm-10 col-md-8 col-lg-6">
        {addProductElement.map(
          ({
            id,
            title,
            role,
            name,
            inputType,
            labelClass,
            inputClass,
            divClass,
            placeholder,
          }) => (
            <div
              className={
                isSold === true && id === 'soldPriceProd' ? 'mb-3' : divClass
              }
              key={id}
            >
              <label htmlFor={id} className={labelClass} key={id}>
                {title}
              </label>
              {inputType && !name && (
                <input
                  placeholder={placeholder}
                  type={inputType}
                  className={inputClass}
                  id={id}
                  aria-describedby="emailHelp"
                  onChange={(e) => set(id, e)}
                />
              )}
              {cover && id === 'coverProd' ? (
                <div className="row my-3">
                  <img src={cover} alt="cover" />
                </div>
              ) : null}
              {name && (
                <input
                  type={inputType}
                  role={role}
                  name={name}
                  className={inputClass}
                  id={id}
                  aria-describedby="emailHelp"
                  onChange={(e) => set(id, e)}
                />
              )}

              {!inputType && (
                <textarea
                  className={inputClass}
                  onChange={(e) => set(id, e)}
                ></textarea>
              )}
            </div>
          )
        )}

        <button
          type="submit"
          className={`btn btn-primary $/*{
            Object.values(newProduct).every((value) => value !== null)
              ? null
              : 'disabled'
          }*/`}
          onClick={(e) => save(e)}
        >
          Enrégistrer
        </button>
      </form>
    </React.Fragment>
  );
}

export default AddProductForm;
