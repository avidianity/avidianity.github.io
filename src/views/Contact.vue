<template>
	<div>
		<div
			class="overflow-hidden d-flex align-items-center"
			style="height: 90vh"
		>
			<div class="mx-auto">
				<h3 data-aos="zoom-in" data-aos-duration="900">
					How may I help you?
				</h3>
				<form
					@submit.prevent.stop="contact()"
					data-aos="zoom-in"
					data-aos-duration="900"
				>
					<label for="name">Name:</label>
					<input
						id="name"
						name="name"
						type="text"
						placeholder="Name"
						class="form-control form-control-sm"
						:disabled="processing"
						:class="{ disabled: processing }"
					/>
					<label for="email">Email:</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						class="form-control form-control-sm"
						:disabled="processing"
						:class="{ disabled: processing }"
					/>
					<label for="message">Message:</label>
					<textarea
						name="message"
						id="message"
						cols="10"
						rows="10"
						placeholder="Message"
						class="form-control form-control-sm mb-2"
						:disabled="processing"
						:class="{ disabled: processing }"
					></textarea>
					<button
						type="submit"
						class="btn btn-primary btn-flat btn-sm"
						:disabled="processing"
						:class="{ disabled: processing }"
					>
						<i
							class="fas fa-circle-notch fa-spin"
							v-if="processing"
						></i>
						{{ processing ? "Submitting..." : "Submit" }}
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Axios from "axios";

@Component
export default class ContactView extends Vue {
	processing = false;
	contact() {
		this.processing = true;
		setTimeout(() => (this.processing = false), 2000);
	}
}
</script>

<style scoped lang="scss"></style>