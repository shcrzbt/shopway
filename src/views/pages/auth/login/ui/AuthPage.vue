<script lang="ts" setup>
import useModule from "./usePage"
import { NButton, NForm, NFormItem, NInput } from "naive-ui"
import { validatorMessages } from "#shared/utils/validators"
import { vPhoneMask } from "#shared/utils/directives"
import { formRules } from "../utils/rules"

const { formRef, formModel, onSubmitForm } = useModule()
</script>

<template>
  <div class="auth">
    <n-form
      ref="formRef"
      :model="formModel"
      :rules="formRules"
      :show-label="false"
      :show-require-mark="false"
      :validate-messages="validatorMessages"
      class="auth-form"
      @submit.prevent="onSubmitForm"
    >
      <h1 class="auth-form__title">Авторизация</h1>

      <n-form-item path="phoneOrName">
        <n-input v-model:value="formModel.phoneOrName" placeholder="Номер телефона или никнейм" name="phoneOrName" />
      </n-form-item>

      <n-form-item path="password">
        <n-input v-model:value="formModel.password" placeholder="Пароль" name="password" show-password-on="click" type="password" />
      </n-form-item>

      <n-button :loading="formModel.loading" attr-type="submit" class="auth-form__submit" round type="primary"> Вход </n-button>
    </n-form>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  @include flex(0, row, center, center);
  height: 100%;
  width: 100%;

  &-form {
    display: flex;
    flex-direction: column;
    width: 40rem;
    background: var(--static-white);
    padding: 2rem;
    border-radius: 2rem;

    &__title {
      @include font("h24");
      text-align: center;
      color: var(--text-primary);
      margin-bottom: 3.2rem;
    }
  }
}
</style>
