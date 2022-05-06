<template>
  <div>
    <v-btn 
      v-if="isClothesFormRoute && showAddClotheButton" 
      icon
      color="accent"
      style="margin-left: 5px;"
      @click="addClothe()"
    >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>

    <v-file-input
      style="display: none;"
      id="fileInput"
      accept="image/*"
      hide-input
      multiple
      v-model="images"
      @change="readImages()"
    ></v-file-input>

    <v-btn 
      color="accent"
      :elevation="existsClothes ? 0 : 2"
      rounded
      :text="existsClothes"
      :large="!existsClothes"
      @click="addClothe(); setLoadingDialog(true);"
    >
      <v-icon>mdi-plus</v-icon>

      ADICIONAR
    </v-btn>
  </div>
</template>