import { Formik } from 'formik';
import { Header, FormWrapper, SearchBtn, FormInput } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    if (values.search.trim() === '') {
      toast.error('Вы ничего не ввели, пожалуйста повторите попытку');
    }
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Header>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <FormWrapper>
          <SearchBtn type="submit">
            <BsSearch />
          </SearchBtn>

          <FormInput
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormWrapper>
      </Formik>
    </Header>
  );
};
