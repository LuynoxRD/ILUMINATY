<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="py-16 md:py-20 bg-gradient-dark relative overflow-hidden">
      <div class="absolute inset-0 opacity-40 -z-10">
        <div class="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-neon-violet/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-neon-lime/20 rounded-full blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="mb-4 text-gray text-3xl md:text-4xl lg:text-5xl font-bold">Política de Privacidad</h1>
        <p class="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
          Tu privacidad es nuestra prioridad. Conoce cómo protegemos y utilizamos tu información personal.
        </p>
      </div>
    </section>

    <!-- Privacy Content -->
    <section class="py-12 md:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">
          <div class="mb-10 md:mb-12">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <p class="text-gray-600 mb-4 text-sm md:text-base">
              En ILUMINATY recopilamos información necesaria para proporcionar nuestros servicios. Esto incluye:
            </p>
            <ul class="list-disc list-inside text-gray-600 ml-4 space-y-2 text-sm md:text-base">
              <li><strong>Información de registro:</strong> nombre, email, contraseña</li>
              <li><strong>Información de perfil:</strong> foto, biografía, redes sociales</li>
              <li><strong>Información de uso:</strong> cómo interactúas con la plataforma</li>
              <li><strong>Información técnica:</strong> dirección IP, tipo de navegador, dispositivo</li>
            </ul>
          </div>

          <div class="mb-10 md:mb-12">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">2. Cómo Usamos tu Información</h2>
            <p class="text-gray-600 mb-4 text-sm md:text-base">
              Utilizamos tu información para los siguientes propósitos:
            </p>
            <ul class="list-disc list-inside text-gray-600 ml-4 space-y-2 text-sm md:text-base">
              <li>Proporcionar y mantener nuestros servicios</li>
              <li>Personalizar tu experiencia en la plataforma</li>
              <li>Comunicarnos contigo sobre actualizaciones y promociones</li>
              <li>Mejorar nuestros servicios mediante análisis de uso</li>
              <li>Prevenir fraudes y proteger la seguridad</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </div>

          <div class="mb-10 md:mb-12">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">3. Compartir Información</h2>
            <p class="text-gray-600 mb-4 text-sm md:text-base">
              No vendemos tu información personal a terceros. Solo compartimos información cuando:
            </p>
            <ul class="list-disc list-inside text-gray-600 ml-4 space-y-2 text-sm md:text-base">
              <li>Tu das consentimiento explícito</li>
              <li>Es necesario para proveedores de servicios que nos ayudan a operar</li>
              <li>Es requerido por ley o proceso legal</li>
              <li>Para proteger nuestros derechos o seguridad</li>
            </ul>
          </div>

          <div class="mb-10 md:mb-12">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">4. Seguridad de Datos</h2>
            <p class="text-gray-600 mb-4 text-sm md:text-base">
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:
            </p>
            <ul class="list-disc list-inside text-gray-600 ml-4 space-y-2 text-sm md:text-base">
              <li>Encriptación SSL/TLS para transmisiones de datos</li>
              <li>Almacenamiento seguro en servidores protegidos</li>
              <li>Acceso restringido solo a personal autorizado</li>
              <li>Monitoreo continuo de seguridad</li>
              <li>Actualizaciones regulares de seguridad</li>
            </ul>
          </div>

          <div class="mb-10 md:mb-12">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">5. Tus Derechos</h2>
            <p class="text-gray-600 mb-4 text-sm md:text-base">
              Tienes los siguientes derechos respecto a tu información personal:
            </p>
            <ul class="list-disc list-inside text-gray-600 ml-4 space-y-2 text-sm md:text-base">
              <li><strong>Acceso:</strong> solicitar una copia de tus datos</li>
              <li><strong>Rectificación:</strong> corregir información inexacta</li>
              <li><strong>Eliminación:</strong> solicitar la eliminación de tus datos</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato legible</li>
              <li><strong>Restricción:</strong> limitar el procesamiento de tus datos</li>
              <li><strong>Oposición:</strong> oponerte al procesamiento de tus datos</li>
            </ul>
          </div>

          <div class="mb-10 md:mb-12">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">6. Cookies y Tecnologías Similares</h2>
            <p class="text-gray-600 mb-4 text-sm md:text-base">
              Utilizamos cookies para mejorar tu experiencia. Para más información, consulta nuestra 
              <RouterLink to="/cookies" class="text-neon-lime hover:underline">Política de Cookies</RouterLink>.
            </p>
          </div>

          <div class="mb-10 md:mb-12">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">7. Retención de Datos</h2>
            <p class="text-gray-600 mb-4 text-sm md:text-base">
              Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, o según lo requiera la ley. Cuando ya no sea necesaria, eliminaremos o anonimizaremos tus datos de manera segura.
            </p>
          </div>

          <div class="mb-10 md:mb-12">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">8. Cambios a esta Política</h2>
            <p class="text-gray-600 mb-4 text-sm md:text-base">
              Podemos actualizar esta política de privacidad periódicamente. Te notificaremos de cambios significativos mediante un aviso en nuestra plataforma o por email. El uso continuado de nuestros servicios después de dichos cambios constituye tu aceptación de la política actualizada.
            </p>
          </div>

          <div class="mb-10 md:mb-12">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">9. Contacto</h2>
            <p class="text-gray-600 mb-4 text-sm md:text-base">
              Si tienes preguntas, inquietudes o deseas ejercer tus derechos de privacidad, contáctanos:
            </p>
            <div class="bg-gray-50 p-4 md:p-6 rounded-lg">
              <p class="text-gray-700 text-sm md:text-base"><strong>Email:</strong> privacy@iluminaty.com</p>
              <p class="text-gray-700 text-sm md:text-base"><strong>Dirección:</strong> 123 Calle del Arte, Brooklyn, NY 11201</p>
              <p class="text-gray-700 text-sm md:text-base"><strong>Teléfono:</strong> +1 (555) 123-4567</p>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-6 md:pt-8 mt-10 md:mt-12">
            <p class="text-gray-500 text-xs md:text-sm text-center">
              Última actualización: Febrero 2026
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-20 bg-gradient-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-500 mb-4">¿Tienes Preguntas sobre Privacidad?</h2>
        <p class="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
          Nuestro equipo de privacidad está aquí para ayudarte. No dudes en contactarnos.
        </p>
        <RouterLink to="/contacto" class="btn-primary inline-block text-sm md:text-base">
          Contactar Equipo de Privacidad
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
