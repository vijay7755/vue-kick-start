import { ref, watch, computed, onMounted } from "vue";

export function useFullName(props) {
    console.log("fullName props: ", props)
  // Create local ref
  const localFirstName = ref(props.firstName || "");
  const localLastName = ref(props.lastName || "");

  watch(
    () => props.firstName,
    (newValue) => {
      if (newValue !== undefined) localFirstName.value = newValue;
    }
  );

  watch(
    () => props.lastName,
    (newValue) => {
      if (newValue !== undefined) localLastName.value = newValue;
    }
  );

  const fullName = computed({
    get() {
      return `${localFirstName.value} ${localLastName.value}`;
    },
    set(newValue) {
      const [first, last] = newValue.split(" ");
      localFirstName.value = first || "";
      localLastName.value = last || "";
    },
  });

  onMounted(() => {
    if (!props.firstName && !props.lastName) fullName.value = "Vijay Krishnan";
  });

  return {
    localFirstName,
    localLastName,
    fullName,
  };
}
