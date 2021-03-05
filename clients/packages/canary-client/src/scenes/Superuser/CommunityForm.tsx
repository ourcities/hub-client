import React from 'react';
import styled from 'styled-components';
import { useMutation, useSession, gql } from 'bonde-core-tools';
import {
  Button,
  ConnectedForm,
  InputField,
  Validators,
  toast
} from 'bonde-components';
import { Row, Col } from 'react-grid-system';
import { useTranslation } from 'react-i18next';

import UploadField from "../../components/UploadFile";
import Panel from '../../components/Panel';

const { isEmail, required } = Validators;

export const isValidFromEmail = (value: any): string | undefined => {
  const regex = /^[a-zà-úA-ZÀ-Ú0-9 ]+<(.*)>$/
  if (regex.test(value)) {
    const email = value.match(regex)[1]
    return isEmail('E-mail inválido')(email);
  } else {
    return 'Padrão inválido. Ex: Nome do remente <email@host.com>';
  }
}

const InsertCommunityMutation = gql`
  mutation InsertCommunities($input: [communities_insert_input!]!) {
    insert_communities(objects: $input) {
      returning {
        id
        name
        description
        city
        created_at
        updated_at
        community_users {
          user {
            first_name
          }
          role
        }
      }
    }
  }
`;

const ButtonStyled = styled(Button)`
  width: auto;
  padding: 10px 30px;
`

const CommunityForm: React.FC = () => {
  const [insertCommunity] = useMutation(InsertCommunityMutation);
  const { user } = useSession();
  const { t } = useTranslation('community');

  const initialValues = {
    community_users: {
      data: {
        user_id: user.id,
        role: 1
      }
    }
  };

  return (
    <ConnectedForm
      initialValues={initialValues}
      onSubmit={(values: any) => {
        insertCommunity({ variables: { input: values } })
          .then(() => {
            // TODO: i18n
            toast(`Parabéns, a comunidade ${values.name} foi adicionada ao Bonde`, { type: toast.TYPE.SUCCESS });
          })
          .catch(({ graphQLErrors, ...errors }) => {
            if (graphQLErrors && graphQLErrors.filter((err: any) => err.extensions.code === 'permission-error').length > 0) {
              toast('Ops! Seu usuário não possui permissão para essa ação, qualquer dúvida entre em contato pelo suporte.', { type: toast.TYPE.ERROR });
            } else {
              console.error({ graphQLErrors, ...errors });
            }
          })
      }}
    >
      {({ submitting, dirty }: any) => (
        <Row>
          <Col sm={12} lg={6}>
            <Panel>
              <UploadField
                label={t('info.form.fields.image.label')}
                name='community.image'
                validate={required('Preenchimento da Imagem é obrigatório')}
              />
              <InputField
                name='community.name'
                label={t('info.form.fields.name.label')}
                placeholder={t('info.form.fields.name.placeholder')}
                validate={required('Preenchimento do Nome é obrigatório')}
              />
              <InputField
                name='community.city'
                label={t('info.form.fields.city.label')}
                placeholder={t('info.form.fields.city.placeholder')}
              />
              <InputField
                name='community.description'
                label={t('info.form.fields.description.label')}
                placeholder={t('info.form.fields.description.placeholder')}
              />
              <InputField
                name='community.signature.name'
                label='Assinatura da comunidade'
                placeholder='Nome da comunidade na assinatura'
                validate={required('Preenchimento da Assinatura é obrigatório')}
              />
              <InputField
                name='community.signature.url'
                label='Site da comunidade'
                placeholder='Insira o link do site ou página oficial da sua comunidade'
                validate={required('Preenchimento do Site ou Página oficial é obrigatório')}
              />
              <Row justify='end'>
                <ButtonStyled disabled={submitting || !dirty} type='submit'>Criar comunidade</ButtonStyled>
              </Row>
            </Panel>
          </Col>
        </Row>
      )}
    </ConnectedForm>
  );
};

export default CommunityForm;
